// import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import  BouncyCheckbox  from "react-native-bouncy-checkbox";

// // form Validation
// import { Formik } from "formik";
// import * as yup from 'yup';
// import { object, string, number, date, InferType } from 'yup';

// const passwordSchema = yup.object().shape({
//   passwordLenght: yup.number()
//   .min(4, 'should be min of 4 character')
//   .max(16, 'should be mix of 16 character')
//   .required('lenght is required')
// })

// export default function App() {

//   const [password, setpassword] = useState('')
//   const [isPassGenerator, setisPassGenerated] = useState(false)

//   const [lowerCase, setlowerCase] = useState(true)
//   const [upperCase, setupperCase] = useState(false)
//   const [number, setnumber] = useState(false)
//   const [symbols, setsymbols] = useState(false)

//   const generatePasswordString = (passwordLength:number) => {
//     let characterList = ''

//     const UpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const digitChars = '0123456789';
//     const specialCahrs = '!@#$%^&*()_+';

//     if (upperCase) {
//       characterList += UpperCaseChars
//     }
//     if (lowerCase) {
//       characterList += LowerCaseChars
//     }
//     if (number) {
//       characterList += digitChars
//     }
//     if (symbols) {
//       characterList += specialCahrs
//     }

//     const passwordResult = createPassword(characterList, passwordLength)

//     setpassword(passwordResult)
//     setisPassGenerated(true)
//   }

//   const createPassword = (characters: string, passwordLenght:number)=>{
//     let result = ''
//     for (let i = 0; i < passwordLenght; i++) {
//       const characterIndex = Math.round(Math.random() * characters.length)
//       result +=  characters.charAt(characterIndex)
      
//     }
//     return result
//   }

//   const resetPasswordState = () =>{
//     setpassword('')
//     setisPassGenerated(false)
//     setlowerCase(true)
//     setupperCase(false)
//     setnumber(false)
//     setsymbols(false)
//   }

//   return (
//    <ScrollView keyboardShouldPersistTaps="handled">
//     <SafeAreaView style={styles.appContainer}>
//       <View style ={styles.formContainer}>
//         <Text style={styles.title}>
//           Password Generator
//         </Text>
//         <Formik
//        initialValues={{  passwordLenght: ''}}
    
//        validationSchema={passwordSchema}

//        onSubmit={ values =>{
//         console.log(values);
//         generatePasswordString(+values.passwordLenght) 
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          isValid,
//          handleChange,
//          handleSubmit,
//          handleReset,         /* and other goodies */
//        }) => (
//         <>
 
//         <View style={styles.inputWrapper}>
//           <View  style={styles.inputColumn}>

//               <Text style={styles.heading}>Password Length</Text>
//               {touched.passwordLenght && errors.passwordLenght && (
//                 <Text style={styles.errorText}>
//                   {errors.passwordLenght}
//                 </Text>
//               )}

//               <TextInput
//               style={styles.inputStyle}
//               value={values.passwordLenght}
//               onChangeText={handleChange('passwordLenght')}
//               placeholder='Ex. 8'
//               keyboardType='numeric'
//               />
//           </View>
//         </View> 
        
//         <View style={styles.inputWrapper}>
//           <Text style={styles.heading}>including lowercase</Text>
//           <BouncyCheckbox
//         isChecked={lowerCase}
//         onPress={() => setlowerCase(!lowerCase)}
//         fillColor='#29ab87'

//           />
//         </View>

//         <View style={styles.inputWrapper}>
//         <Text style={styles.heading}>including Uppercase </Text>
//           <BouncyCheckbox
//         isChecked={upperCase}
//         onPress={() => setupperCase(!upperCase)}
//         fillColor='#29ab87'

//           />
//         </View>

//         <View style={styles.inputWrapper}>
//         <Text style={styles.heading}>including Number</Text>
//           <BouncyCheckbox
//         isChecked={number}
//         onPress={() => setnumber(!Number)}
//         fillColor='#29ab87'

//           />
//         </View>

//         <View style={styles.inputWrapper}>
//         <Text style={styles.heading}>including Symbols</Text>
//           <BouncyCheckbox
//         isChecked={symbols}
//         onPress={() => setsymbols(!symbols)}
//         fillColor='#29ab87'

//           />
//         </View>

//         <View style={styles.formActions}>

//           <TouchableOpacity 
//           disabled={!isValid}
//           style={styles.primaryBtnTxt}
//          onPress={()=>handleSubmit()}
//           >
            
//             <Text>
//             Generate Password
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//           style={styles.secondaryBtn}
//           onPress={()=>{
//             handleReset();
//             resetPasswordState()
//           }}
//           >
//             <Text>
//               Reset
//             </Text>
//           </TouchableOpacity>

//         </View>
//         </>
//        )}
//         </Formik>
//       </View>

//       {isPassGenerator ?( 
//   <View style={{ marginTop: 20, alignItems: 'center' }}>
//     <Text style={{ fontSize: 18, color: '#fff' }}>
//       Generated Password:
//     </Text>
//     <Text style={{ fontSize: 20, color: '#29ab87', fontWeight: 'bold', marginTop: 10 }}>
//       {password}
//     </Text>
//   </View>
// ) : null}


//     </SafeAreaView>
//    </ScrollView>

//   )
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   formContainer: {
//     margin: 8,
//     padding: 8,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: '600',
//     marginBottom: 15,
//   },
//   subTitle: {
//     fontSize: 26,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   description: {
//     color: '#758283',
//     marginBottom: 8,
//   },
//   heading: {
//     fontSize: 15,
//   },
//   inputWrapper: {
//     marginBottom: 15,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   inputColumn: {
//     flexDirection: 'column',
//   },
//   inputStyle: {
//     padding: 8,
//     width: '30%',
//     borderWidth: 1,
//     borderRadius: 4,
//     borderColor: '#16213e',
//   },
//   errorText: {
//     fontSize: 12,
//     color: '#ff0d10',
//   },
//   formActions: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   primaryBtn: {
//     width: 120,
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     backgroundColor: '#5DA3FA',
//   },
//   primaryBtnTxt: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '700',
//   },
//   secondaryBtn: {
//     width: 120,
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     backgroundColor: '#CAD5E2',
//   },
//   secondaryBtnTxt: {
//     textAlign: 'center',
//   },
//   card: {
//     padding: 12,
//     borderRadius: 6,
//     marginHorizontal: 12,
//   },
//   cardElevated: {
//     backgroundColor: '#ffffff',
//     elevation: 1,
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     shadowColor: '#333',
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   generatedPassword: {
//     fontSize: 22,
//     textAlign: 'center',
//     marginBottom: 12,
//     color:'#000'
//   },
// });


// // appContainer:{},
// // formContainer:{},
// // title:{},
// // inputWrapper:{

// // },
// // inputColumn:{},
// // formActions:{},
// // inputStyle:{},
// // heading:{fontSize:22},
// // errorText:{}





import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from "react-native-bouncy-checkbox";

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';
// YOUTUBE:
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
  
})
export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength )

    setPassword(passwordResult)
    setIsPassGenerated(true)
    
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
    console.log("hitesh");
    
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
    
    
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        console.log(values);
        generatePasswordString(+values.passwordLength) 
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
            
          </View>
          <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Ex. 8"
            keyboardType='numeric'
            />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor="#29AB87"
          />
         </View>
         <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setupperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>
         <View style={styles.formActions}>
          <TouchableOpacity
          disabled={!isValid}
          style={styles.primaryBtn}
          onPress={handleSubmit}
          >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={ () => {
            handleReset();
            resetPasswordState()
          }}
          >
            <Text style={styles.secondaryBtnTxt}>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});