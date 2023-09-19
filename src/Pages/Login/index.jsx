import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [messages, setMessages] = useState({
    email: {
      text: '',
      isSuccess: false,
      isError: false,
    },
  });

  const validateEmail = () => {
    const validEmail = formData.email.match(/^[\w\d]+@[\w]+(\.\w+){1,2}$/);
    setMessages({
      ...messages,
      email: {
        text: validEmail ? 'Excellent!' : 'Please enter a valid email',
        isSuccess: validEmail,
        isError: !validEmail,
      },
    });
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      validateEmail();
    }
  };

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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  maxLength={16}
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            <div className="text-sm">
              Don`t have an account?
              <Link
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                to={'/signup'}
              > Create it here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login