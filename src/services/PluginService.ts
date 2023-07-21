import { apiClient, tryRequest } from '@/api'

/*
 * This is a service that is used to get the list of plugins active on the Cheshire Cat.
 * It can also toggle them according to the user's choice.
 */
const PluginService = Object.freeze({
  getPlugins: async () => {
    return await tryRequest(
      apiClient.api?.plugins.listAvailablePlugins(), 
      "Getting all the available plugins", 
      "Unable to fetch the plugins"
    )
  },
  togglePlugin: async (id: string) => {
    const result = await tryRequest(
      apiClient.api?.plugins.togglePlugin(id), 
      `Toggle plugin ${id}`, 
      `Unable to toggle plugin ${id}`
    )
    return result.data
  },
  deletePlugin: async (id: string) => {
    const result = await tryRequest(
      apiClient.api?.plugins.deletePlugin(id), 
      `Deleted plugin ${id}`, 
      `Unable to delete plugin ${id}`
    )
    return result.data
  },
  sendFile: async (file: File) => {
    const result = await tryRequest(
      apiClient.api?.plugins.uploadPlugin({ file }), 
      "Uploaded plugin successfully", 
      "Unable to upload the plugin"
    )
    return result.data
  },
})

export default PluginService
