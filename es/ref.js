function makeWeakCached(f) {
  const cache = new Map();
  const cleanup = new FinalizationRegistry(key => {
    const ref = cache.get(key);
    if (ref && !ref.deref()) cache.delete(key);
  });

  return key => {
    const ref = cache.get(key);
    if (ref) {
      const cached = ref.deref();
      if (cached !== undefined) return cached;
    }

    const fresh = f(key);
    cache.set(key, new WeakRef(fresh));
    cleanup.register(fresh, key);
    console.log('fresh', fresh)
    return fresh;
  };
}
const getImage = (name)  => {
  return {
    [name]: 'big Obj'
  }
}

const getImageCached = makeWeakCached(getImage);
console.log(getImageCached('a'))
console.log(getImageCached('a'))
