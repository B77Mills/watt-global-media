const { websiteScheduledContent: query } = require('@parameter1/base-cms-web-common/block-loaders');
const defaultFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/content-list');

module.exports = async (apolloClient, paramsSets = []) => {
  if (!paramsSets || !paramsSets.length) return { nodes: [] };
  const results = await Promise.all(paramsSets.map((params) => query(apolloClient, {
    queryFragment: defaultFragment,
    ...params,
  })));

  const nodes = results.reduce((arr, result) => {
    arr.push(...result.nodes);
    return arr;
  }, []);
  return { nodes };
};
