import { useGithubJsonForm } from "react-tinacms-github"
import { usePlugin, useFormScreenPlugin } from "tinacms"
import { useGithubToolbarPlugins } from "react-tinacms-github"


function useForms(file, configFile) {
  const [data, form] = useGithubJsonForm(file)
  usePlugin(form)

  const [configData, configForm] = useGithubJsonForm(configFile, {
    label: 'Config',
    fields: [
      {
        name: 'title',
        component: 'text'
      },
      {
        name: 'services',
        component: 'text'
      },
      {
        name: 'testimonials',
        component: 'text'
      },
      {
        name: 'contact',
        component: 'text'
      }
    ]
  })

  useFormScreenPlugin(configForm)
  useGithubToolbarPlugins()

  return [data, form, configData, configForm]
}

export default useForms