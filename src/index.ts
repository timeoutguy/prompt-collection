import {select, input} from '@inquirer/prompts'
import collection from './collection.json'
import clipboard from "clipboardy";

(async () => {
    const replaceableMap = new Map();

    console.log(`🌟 ===============================\n`);
    console.log(`📚 Welcome to the IA Prompts Collection!\n`);
    console.log(`🤖 Your One-Stop Shop for AI Magic ✨\n`)
    console.log(`🎯 Here you'll find carefully curated prompts\n`)
    console.log(`🔮 Ready to unleash AI's potential\n`)
    console.log(`🌟 ===============================\n`);

    const promptIndex = await select({
        message: '📝 Please select a prompt:',
        loop: false,
        choices: collection.map((element, index) => {
            return {
                name: element.name,
                value: index
            }
        })
    })

    const promptSelected = collection.at(promptIndex);

    if (!promptSelected) {
        console.error('Invalid prompt selected.')
        return;
    }

    console.log(`Prompt selected: ${promptSelected.prompt}\n`)
    for (const element of promptSelected.replaceable) {
        const value = await input({
            message: `Enter the value for ${element}`
        })

        replaceableMap.set(element, value);
    }


    promptSelected.prompt = replaceTemplate(promptSelected.prompt, Object.fromEntries(replaceableMap.entries()))

    console.log('🌟Your final prompt was copied to your clipboard🌟\n')
    console.log(promptSelected.prompt)
    await clipboard.write(promptSelected.prompt)
})()


function replaceTemplate(template: string, data: string) {
    return template.replace(/\{\{([^}]+)}}/g, (match, key) => {
        return data[key] || match;
    });
}