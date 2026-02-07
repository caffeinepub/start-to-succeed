const PHONE_NUMBER = '06289514099';
const WHATSAPP_NUMBER = '916289514099';

export function getPhoneLink(): string {
  return `tel:+${PHONE_NUMBER}`;
}

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}
