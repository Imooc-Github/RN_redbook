export const sleep = async (duration: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, duration);
    });
}