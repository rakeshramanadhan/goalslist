
export default async function getGoals() {
    const response = await fetch('https://unstats.un.org/sdgapi/v1/sdg/Goal/List?includechildren=tru')
 
    if(!response.ok) {
       throw new Error('failed to fetch users')
    }
 
     return await response.json()
 }
 