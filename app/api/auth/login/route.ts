import { validateAdminLogin, getAdminToken } from "@/lib/auth"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (validateAdminLogin(email, password)) {
    const token = getAdminToken(email)
    return Response.json({ success: true, token, email })
  }

  return Response.json({ success: false, error: "Invalid credentials" }, { status: 401 })
}
