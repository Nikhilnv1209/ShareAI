import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import Button from '../../components/Button'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = () => {}


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='min-h-[88vh] w-full items-start justify-center px-4 my-6'>
          <Image source={images.logo}
            className='w-[150px] h-[50px]'
            resizeMode='contain'
          />
          <Text className='text-2xl text-center text-white font-psemibold mt-3 mb-6'>
            Sign up to ShareAI
          </Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            styles='mt-6'
            placeholder='Enter your Unique Username'
          />
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType='email-address'
            styles='mt-6'
            placeholder='Enter your email'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            styles='mt-6'
            placeholder='Enter your password'
          />

          <Button 
            title='Sign Up'
            containerStyles='mt-6 w-full'
            textStyles='text-lg'
            handlePress={submitForm}
            isLoading={isSubmitting}
          />

          <View className='flex-row items-center justify-center w-full gap-2 mt-6'>
            <Text className='text-gray-100 font-pmedium text-sm'>
              Already have an account?
            </Text>
            <Link href={'/sign-in'} className='text-secondary-200 font-pmedium ml-1 text-sm'>
              SignIn
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp