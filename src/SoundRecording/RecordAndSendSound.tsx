import React , {useState}from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const RecordAndSendSound = () => {
  const [isRecording, setIsRecording] = useState(false);
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const startRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      console.log('Recording started:', result);
      setIsRecording(true);
    } catch (error) {
      console.log('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      console.log('Recording stopped:', result);
      setIsRecording(false);
      sendSound(result);
    } catch (error) {
      console.log('Error stopping recording:', error);
    }
  };

  const sendSound = async (audioFile:any) => {
    try {
      // Here, you can send the audioFile to your server or perform any other actions
      // to handle the recorded audio data
      console.log('Audio file:', audioFile);

      // Replace the following code with your API function to send the recorded sound
      // const response = await sendSoundToServer(audioFile);
      // console.log('Sound sent to server:', response);
    } catch (error) {
      console.log('Error sending sound to server:', error);
    }
  };

  return (
    <View>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
    </View>
  );
};
export default RecordAndSendSound;
