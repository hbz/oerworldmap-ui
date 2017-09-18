export const formatURL = (url) =>  {
  const re = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/\n]+)/
  return re.exec(url)[1] || url
}

export const getTitle = (data) => (
  data.about && (data.about.name || data.about['@id'])
    ? data.about.name || data.about['@id']
    : data.totalItems + " Entries"
)

export default {
  getTitle, formatURL
}
