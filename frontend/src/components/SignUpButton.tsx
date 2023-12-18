import Link from 'next/link'

export function SignUpButton() {
  return (
    <Link href="signup">
      <button className="btn">Sign Up</button>
    </Link>
  )
}
