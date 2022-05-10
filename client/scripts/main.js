import AssetLink from './asset-link'
import AssetItem from './asset-item'
import AssetList from './asset-list'

function main() {
    AssetLink.define()
    AssetItem.define()
    AssetList.define()

    let title = `${window.location.hostname} | superbindex`

    if (window.location.pathname === '/') {
        document.querySelector('#parent').style.display = 'none'
    } else {
        try {
            const dirnames = decodeURIComponent(window.location.pathname)
                .replace(/(^\/|\/$)/g, '')
                .split('/')

            title = `${dirnames[dirnames.length - 1]} - ${title}`
        } catch (error) {
            console.error(error)
        }
    }

    document.title = title
}

document.addEventListener('DOMContentLoaded', main)
