"use client"

import localforage from "localforage"

if (typeof window !== "undefined") {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: "TaskApp",
    version: 1.0,
    storeName: "tasks",
    description: "Armazenamento de tasks do aplicativo",
  })
}

export default localforage
