export type Links = Record<string, string> & {
  self: string
}

export type Entity<T> = {
  data: T
  links: Links
}

export type EntityList<T> = {
  data: Entity<T>[]
  links: Links
}

export const entity = <T>(data: T, links: (e: T) => Links): Entity<T> => {
  return {
    data,
    links: links(data),
  }
}

export const entityList = <T>(
  list: T[],
  listLinks: () => Links,
  itemLinks: (entity: T) => Links
): EntityList<T> => {
  return {
    data: list.map((item) => entity(item, itemLinks)),
    links: listLinks(),
  }
}
