// Simple authentication utilities
const ADMIN_CREDENTIALS = {
  email: "admin@education.bd",
  password: "admin123", // In production, use proper hashing
}

export function validateAdminLogin(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
}

export function getAdminToken(email: string): string {
  return btoa(`${email}:${Date.now()}`)
}

export function verifyAdminToken(token: string): boolean {
  try {
    const decoded = atob(token)
    return decoded.includes(ADMIN_CREDENTIALS.email)
  } catch {
    return false
  }
}
