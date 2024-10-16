export type ITEM = {
  id: string,
  properties: string[];
}

export type EditableType = Omit<ITEM, 'id'>;