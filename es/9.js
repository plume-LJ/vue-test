try {
  await Promise.reject(2)
}catch(e) {
  console.log('sdsds')
  console.error(e)
}