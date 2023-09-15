import { useState } from "react"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showSuccessEmlMsg, setShowSuccessEmlMsg] = useState(false)
  const [showSuccessPassMsg, setShowSuccessPassMsg] = useState(false)
  const [showEmailMessage, setShowEmailMessage] = useState(false)
  const [showPassMessage, setShowPassMessage] = useState(false)
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const rgxPassValidCriteria = [
    {
      criteria: /^.{8,16}$/,
      message: 'Your password must be at least 8 characters long and no longer than 16'
    },
    {
      criteria: /\d/g,
      message: 'Your password must contain at least 1 digit'
    },
    {
      criteria: /[a-zA-Z]/g,
      message: 'Your password must contain at least 1 letter'
    },
    {
      criteria: /^\S+$/,
      message: 'Your password must not contain blank spaces'
    }
  ]

  const onChangeEmail = e => {
    setEmail(e.target.value);
    const valid = email.match(/^[\w\d]+@[\w]+(\.\w+){1,2}$/)
    if (valid == null) {
      setEmailMessage('Please enter a valid email')
      setShowEmailMessage(true)
      setShowSuccessEmlMsg(false)
    }
    else {
      setEmailMessage('')
      setShowEmailMessage(false)
      setShowSuccessEmlMsg(true)
      setTimeout(() => {
        setShowSuccessEmlMsg(false)
      }, 3000)
    }
  }

  const onChangePassword = e => {
    setPassword(e.target.value);

    for (const [index, validator] of rgxPassValidCriteria.entries()) {
      let valid = password.match(validator.criteria)
      if (valid == null) {
        loadErrorPassMessage(validator.message)
        break;
      }
      if (rgxPassValidCriteria.length - 1 == index && valid != null)
        setShowSuccessPassMsg(true)
    }

    if (showSuccessPassMsg) {
      setPasswordMessage('')
      setShowPassMessage(false)
      setShowSuccessPassMsg(true)
      setTimeout(() => {
        setShowSuccessPassMsg(false)
      }, 3000)
    }
  }


  const loadErrorPassMessage = (message) => {
    setPasswordMessage(message)
    setShowPassMessage(true)
    setShowSuccessPassMsg(false)
  }

  return (
    <div className="min-h-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                {
                  showEmailMessage &&
                  <p
                    className="text-red-800 bg-red-100 p-3 mb-3 rounded-md"
                  >{emailMessage}</p>
                }
                {
                  showSuccessEmlMsg &&
                  <p
                    className="text-green-800 bg-green-100 p-3 mb-3 rounded-md"
                  >Excelent!</p>
                }
                <input id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                {
                  showPassMessage &&
                  <p
                    className="text-red-800 bg-red-100 p-3 mb-3 rounded-md"
                  >{passwordMessage}</p>
                }
                {
                  showSuccessPassMsg &&
                  <p
                    className="text-green-800 bg-green-100 p-3 mb-3 rounded-md"
                  >Excelent!</p>
                }
                <input id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login