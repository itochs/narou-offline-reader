type NarouOutType = {
  title: string;
  ncode: string;
};

function parse(data: NarouOutType): NarouOutType {
  const { title }: NarouOutType = data;
  const new_data = {
    ...data,
    title: decodeURIComponent(title.replace(/&amp;/g, "&")),
  };
  return new_data;
}

export { parse, NarouOutType };
