function excludeItems(items, excludes) {
  let map = new Map();
  let exclude_keys = new Set();
  
  excludes.forEach(({k,v})=>{
    exclude_keys.add(k);
    if(!map.has(k)){
      map.set(k,new Set());
    }
    map.get(k).add(v);
  })

  return items.filter(item=>{
    return [...exclude_keys].every(ex_key=>{
      return !map.get(ex_key).has(item[ex_key])
    })
  });
}