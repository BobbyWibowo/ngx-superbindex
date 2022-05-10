import AssetLink from './asset-link'
import AssetItem from './asset-item'
import AssetList from './asset-list'

function main() {
    AssetLink.define()
    AssetItem.define()
    AssetList.define()

    const SHOW_LAST_DIR_ONLY = false

    let title = `${window.location.hostname} | superbindex`

    if (window.location.pathname === '/') {
        document.querySelector('#parent').style.display = 'none'
    } else {
        try {
            const decoded = decodeURIComponent(window.location.pathname)
                .replace(/(^\/|\/$)/g, '')

            if (SHOW_LAST_DIR_ONLY) {
                const dirnames = decoded.split('/')
                title = `${dirnames[dirnames.length - 1]} - ${title}`
            } else {
                title = `${decoded} - ${title}`
            }
        } catch (error) {
            console.error(error)
        }
    }

    document.title = title
}

document.addEventListener('DOMContentLoaded', main)
