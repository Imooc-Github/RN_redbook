export function formatPhone(phone: string): string {
    let trim: string = phone.replace(/\s+/g, '');
    const result = [
        trim.slice(0, 3),
        trim.slice(3, 7),
        trim.slice(7, 11)
    ].filter(item => !!item).join(' ');
    return result;
}

export function replaceBlank(phone: string): string {
    return phone ? phone.replace(/\s+/g, '') : '';
}