const options = { year: 'numeric', month: 'long', day: 'numeric' }

const formatDate = (date) => new Date(date).toLocaleDateString('en', options)

export default (_, inject) => {
  inject('formatDate', formatDate)
}
