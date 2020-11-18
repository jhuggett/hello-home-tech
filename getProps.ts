import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

const getProps = (fileName: string) => async ({
  preview,
  previewData
}) => {
  if (preview) {
    const contentFile = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: `content/${fileName}.json`,
      parse: parseJson,
    });
    return {
      props: {
        ...contentFile.props,
        configFile: (
          await getGithubPreviewProps({
            ...previewData,
            fileRelativePath: `content/config.json`,
            parse: parseJson,
          })
        ).props.file,
      },
    };
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      configFile: {
        fileRelativePath: `content/config.json`,
        data: (await import(`./content/config.json`))
          .default,
      },
      file: {
        fileRelativePath: `content/${fileName}.json`,
        data: (await import(`./content/${fileName}.json`))
          .default,
      },
    },
  };
}

export default getProps