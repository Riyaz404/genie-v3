export const businessPhoneDisplay = '+91 90638 77877'
export const businessPhoneTel = '+919063877877'
export const businessWhatsAppNumber = '919063877877'

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(message)}`
}
