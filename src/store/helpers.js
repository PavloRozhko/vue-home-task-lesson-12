export function isSatisfiedSearchConditions(person, filter) {
  if (filter.name) {
    if (!person.name.toLowerCase().includes(filter.name.toLowerCase())) return false
  }

  if (filter.ageFrom) {
    if (filter.ageFrom > person.age) return false
  }

  if (filter.ageTo) {
    if (filter.ageTo < person.age) return false
  }

  if (filter.position) {
    if (!person.position.toLowerCase().includes(filter.position.toLowerCase())) return false
  }

  if (filter.experienceFrom) {
    if (filter.experienceFrom > person.experience) return false
  }

  if (filter.experienceTo) {
    if (filter.experienceTo < person.experience) return false
  }

  return true
}
