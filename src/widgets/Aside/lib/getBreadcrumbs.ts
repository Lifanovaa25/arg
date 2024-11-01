/**
 * TODO: возможно в будущем придетсья доработать
 * Функция получает текущую url-строку и дальше возвращет массив для отрисовки хлебных крошек. Активная страничка имеет opacity 1, другие 0.7
 */
export const getBreadcrumbs = (pathname: string) => {
  const pathArray = pathname
    .split('/')
    // .filter((path) => path && !['equipment', 'industry'].includes(path));
    .filter((path) => path && !['product'].includes(path));

  return [
    { href: '/', label: 'Home page', isActive: pathname === '/' },
    ...pathArray.map((path, index) => {
      let href = '/' + pathArray.slice(0, index + 1).join('/');
      let label = path.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
      if (href === '/catalog/equipment' || href === '/catalog/industry') {
        href = '/catalog/';
      }
      label = label.replace(/\bAnd\b/g, 'and');
      label = label.replace(/%20/g, ' ');

      return {
        href,
        label,
        isActive: href === (pathname.replace('product','')),
      };
    }),
  ];
};
