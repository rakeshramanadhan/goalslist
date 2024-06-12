
export default async function getGoal(code) {
    const response = await fetch(`https://unstats.un.org/sdgapi/v1/sdg/Goal/${code}/Target/List?includechildren=true`)
    if(!response.ok) {
        throw new Error('failed to fetch user')
    }

    return response.json()

}