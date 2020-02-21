import speech_recognition as sr

def listenMicrophone():

    microphone = sr.Recognizer()
    with sr.Microphone() as source:
        microphone.adjust_for_ambient_noise(source)
        print("Diga alguma coisa: ")
        audio = microphone.listen(source)
        print("Processando...")
    try:
        phrase = microphone.recognize_google(audio,language='pt-BR')
        print("Você disse: " + phrase)
    except sr.UnkownValueError:
        print("Não entendi")
        return phrase

listenMicrophone()