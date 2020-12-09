export default async function ({ store, from, params }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    await Promise.all([
      store.dispatch('loadProducts'),
      store.dispatch('loadCategories')
    ])
    // await store.dispatch('loadOneProduct', { productId: params.id })
  }
}
