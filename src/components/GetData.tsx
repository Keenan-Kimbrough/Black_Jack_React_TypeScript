   export default async function getEnvironmentData  (Url: string): Promise<object>  {
    const response = await fetch(url);
    return await response.json()
}
async function something () {
const data = await getEnvironmentData ('https://deckofcardsapi.com/api/deck/new/shuffle/')
console.log(data)
}
something()


//javascript is single threaded, can not run 2 lines at same time.
//await, stop here annd work in background. once promise is done it is resumed when left off.
//async just means it is will finish and always returns a promise
