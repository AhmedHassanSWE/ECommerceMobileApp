import React from 'react';
import {View, Text} from 'react-native';
import {formatTimer} from '../../utils/HelperFunctions'


function Timer(props) {
    const [seconds, setSeconds] = React.useState(props.decending? props.maxSeconds: 0);

    let interval = React.useRef();

    React.useEffect(() => {
        interval.current = setInterval (() => {
        setSeconds(prevSeconds => props.decending? prevSeconds - 1 : prevSeconds + 1)}, 1000);

        return () => {
            clearInterval(interval.current)
        }

    }, []);
    

    React.useEffect(() => {
        const deadlineValue = props.decending? 0 : props.maxSeconds;
        if (seconds === deadlineValue) {
        console.log('clear')
        clearInterval(interval.current);
        props.deadlineFunction();
        }
    }, [seconds])


  
    return(
        <View>
            <Text>{formatTimer(seconds)}</Text>
        </View>
    )
}


export default Timer;
