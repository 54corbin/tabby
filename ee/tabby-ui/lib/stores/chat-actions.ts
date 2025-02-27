import { useChatStore } from './chat-store'

const set = useChatStore.setState

export const setActiveChatId = (id: string) => {
  set(() => ({ activeChatId: id }))
}

export const updateSelectedModel = (model: string | undefined) => {
  set(() => ({ selectedModel: model }))
}

export const updateSelectedRepoSourceId = (sourceId: string | undefined) => {
  set(() => ({ selectedRepoSourceId: sourceId }))
}

export const updateEnableActiveSelection = (enable: boolean) => {
  set(() => ({ enableActiveSelection: enable }))
}
