function parse(data) {
  const { title } = data;
  const new_data = {
    ...data,
    title: decodeURIComponent(title.replace(/&amp;/g, "&")),
  };
  return new_data;
}

export { parse };
