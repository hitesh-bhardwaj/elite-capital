export const getContent = (locale, file) => {
    try {
        const content = require(`../content/${locale}/${file}.json`);
        return content;
    } catch (error) {
        console.error("Content file not found:", locale, file, error);
        return null;
    }
};