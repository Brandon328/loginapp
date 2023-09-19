// import { useState } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [messages, setMessages] = useState({
    fullname: {
      text: '',
      isSuccess: false,
      isError: false
    },
    email: {
      text: '',
      isSuccess: false,
      isError: false
    },
    password: {
      text: '',
      isSuccess: false,
      isError: false
    },
    confirmPassword: {
      text: '',
      isSuccess: false,
      isError: false
    },
  })
  const rgxPassValidCriteria = [
    {
      criteria: /^.{8,16}$/,
      message: 'Your password must be at least 8 characters long and no longer than 16',
    },
    {
      criteria: /\d/g,
      message: 'Your password must contain at least 1 digit',
    },
    {
      criteria: /[a-zA-Z]/g,
      message: 'Your password must contain at least 1 letter',
    },
    {
      criteria: /^\S+$/,
      message: 'Your password must not contain blank spaces',
    },
  ];
  let newValue = ''

  const validateFullname = () => {
    const valid = newValue.match(/^[a-zA-Z\s]{3,40}$/)
    setMessages({
      ...messages,
      fullname: {
        text: valid ? 'Excelent!' : 'Please enter a valid name',
        isSuccess: valid,
        isError: !valid
      }
    })
  }
  const validateEmail = () => {
    const validEmail = newValue.match(/^[\w\d]+@[\w]+(\.\w+){1,2}$/);
    setMessages({
      ...messages,
      email: {
        text: validEmail ? 'Excellent!' : 'Please enter a valid email',
        isSuccess: validEmail,
        isError: !validEmail,
      },
    });
  }
  const validatePassword = () => {
    for (const validator of rgxPassValidCriteria) {
      if (!newValue.match(validator.criteria)) {
        setMessages({
          ...messages,
          password: {
            text: validator.message,
            isSuccess: false,
            isError: true,
          },
        });
        return;
      }
    }
    setMessages({
      ...messages,
      password: {
        text: 'Excellent!',
        isSuccess: true,
        isError: false,
      },
    });
  }
  const validateConPassword = () => {
    const validConfirmPass = (formData.password === newValue);

    setMessages({
      ...messages,
      confirmPassword: {
        text: validConfirmPass ? 'Excelent!' : 'Please enter the same password',
        isSuccess: validConfirmPass,
        isError: !validConfirmPass
      }
    })
  }

  const onChange = e => {
    const { name, value } = e.target;
    newValue += value
    setFormData({
      ...formData,
      [name]: value
    })
    if (name === 'fullname') {
      validateFullname(value);
    }
    if (name === 'email') {
      validateEmail(value);
    }
    if (name === 'password') {
      validatePassword(value);
    }
    if (name === 'confirmPassword') {
      validateConPassword(value);
    }
  }

  return (
    <div className="min-h-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2
            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
              <div className="mt-2">
                {messages.fullname.isError && (
                  <p className="text-red-800 bg-red-100 p-3 mb-3 rounded-md">{messages.fullname.text}</p>
                )}
                {messages.fullname.isSuccess && (
                  <p className="text-green-800 bg-green-100 p-3 mb-3 rounded-md">{messages.fullname.text}</p>
                )}
                <input id="fullname"
                  name="fullname"
                  type="text"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.fullname}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                {messages.email.isError && (
                  <p className="text-red-800 bg-red-100 p-3 mb-3 rounded-md">{messages.email.text}</p>
                )}
                {messages.email.isSuccess && (
                  <p className="text-green-800 bg-green-100 p-3 mb-3 rounded-md">{messages.email.text}</p>
                )}
                <input id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                {messages.password.isError && (
                  <p className="text-red-800 bg-red-100 p-3 mb-3 rounded-md">{messages.password.text}</p>
                )}
                {messages.password.isSuccess && (
                  <p className="text-green-800 bg-green-100 p-3 mb-3 rounded-md">{messages.password.text}</p>
                )}
                <input id="password"
                  maxLength={16}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
              </div>
              <div className="mt-2">
                {messages.confirmPassword.isError && (
                  <p className="text-red-800 bg-red-100 p-3 mb-3 rounded-md">{messages.confirmPassword.text}</p>
                )}
                {messages.confirmPassword.isSuccess && (
                  <p className="text-green-800 bg-green-100 p-3 mb-3 rounded-md">{messages.confirmPassword.text}</p>
                )}
                <input id="confirmPassword"
                  maxLength={formData.password.length}
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.confirmPassword}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            <div className="text-sm">
              Already have an account?
              <Link
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                to={'/'}
              > Sign in here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup