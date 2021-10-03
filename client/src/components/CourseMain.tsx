import React, {useEffect, useMemo, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {usePreloadedQuery} from 'react-relay/hooks';
import {CourseQuery} from '../pages/Course';
import colors from '../theme/colors';
import { splitString } from '../utils/courses';

function CourseMain(props: any) {
  const [background, setBackground] = useState<'initial' | 'success' | 'error'>('initial');
  const [pause, setPause] = useState(false);
  const [wordsCount, setWordsCount] = useState(2);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [phraseVisibility, setPhraseVisibility] = useState(true);
  const [intervalMs, setIntervalMs] = useState(1000);
  const [userInput, setUserInput] = useState('');
  const data = usePreloadedQuery<any>(CourseQuery, props.preloadedQuery);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
 console.log(data)
  const wordsArray = useMemo(() => {
    return splitString(data?.node?.body || '');
  }, [data]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (pause) {
        return;
      }
      setBackground('initial');
      const pharse = [...Array(wordsCount)]
        .map(e => wordsArray[getRandomInt(0, wordsArray.length)])
        .join(' ');
      setCurrentPhrase(pharse);
      setPhraseVisibility(true);
      setTimeout(() => setPhraseVisibility(false), intervalMs);
      setPause(true);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pause, wordsArray]);

  const getBackgroundColorStyle = () => {
    switch(background) {
      case 'initial':
        return styles.backgroundColorInitial;
      case 'success':
        return styles.backgroundColorSuccess;
      case 'error':
        return styles.backgroundColorError;
      default:
        return styles.backgroundColorInitial;
    }
  }

  const onUserInputSubmit = () => {
    if (userInput.toLowerCase() === currentPhrase.toLowerCase()) {
      setBackground('success');
      setUserInput('');
      setPause(false);
    } else {
      setBackground('error');
      setUserInput('');
      setPause(false);
    }
  }

  const onUserInputChange = (value: string) => setUserInput(value);

  return (
    <View style={{...styles.background, ...getBackgroundColorStyle()}}>
        <Text style={styles.phrase}>
          {phraseVisibility && currentPhrase}
        </Text>
        {background !== 'initial' && <Text style={styles.phraseResult}>{currentPhrase}</Text>}
        {background === 'initial' && <View style={styles.controlsContainer}>
          <TextInput style={styles.input} value={userInput} onChangeText={onUserInputChange} />
          <Button color={colors.primary} title='Submit' onPress={onUserInputSubmit} />
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  backgroundColorInitial: {
    backgroundColor: '#ffffff',
  },
  backgroundColorSuccess: {
    backgroundColor: '#81c784',
  },
  backgroundColorError: {
    backgroundColor: '#e57373',
  },
  phrase: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary
  },
  phraseResult: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff'
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.primary,
    textAlign: 'center',
    padding: 16,
    marginTop: 32,
    marginBottom: 32,
  },
  controlsContainer: {
    marginHorizontal: 16,
  }
});

export default CourseMain;
