import { useCallback, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

export const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('https://assets.mailerlite.com/jsonp/1613635/forms/157963241624962854/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          email: e.currentTarget.email.value,
        },
      }),
    })
      .then((response) => response.json())
      .then(() => setShowSuccess(true))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div id="contact">
      <h3 className="mb-4 text-2xl font-bold">Stay in Orbit</h3>
      <p className="mb-6 text-gray-400">Want early access, previews, or just want to learn more?</p>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          className="border-gray-600 bg-transparent text-white placeholder:text-gray-400"
        />
        <Button
          type="submit"
          variant="outline"
          className="border-gray-600 text-black hover:bg-gray-400"
        >
          Submit
        </Button>
      </form>
      {showSuccess && (
        <p className="mt-4 text-green-400">You have successfully joined our subscriber list.</p>
      )}
    </div>
  )
}
