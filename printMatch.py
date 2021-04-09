#!/usr/bin/python3
import face_recognition

known_image = face_recognition.load_image_file("images/known/AlexJones.jpg")
unknown_image = face_recognition.load_image_file("images/unknown/AJprofile.jpg")

known_encoding = face_recognition.face_encodings(known_image)[0]
unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

results = face_recognition.compare_faces([known_encoding], unknown_encoding)

if results[0]:
    print('This is Alex Jones')
else:
    print('This is not Alex Jones')
