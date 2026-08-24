export function initAttachment() {
    const uploadFileAction = document.querySelector('#uploadFileAction');
    const hiddenFileInput = document.querySelector('#hiddenFileInput');
    const filePreviewContainer = document.querySelector('#filePreviewContainer');

    if (uploadFileAction) {
        uploadFileAction.addEventListener('click', () => {
            hiddenFileInput.click();
            document.querySelector('#attachmentDropdown').classList.add('hidden');
        });
    }

    if (hiddenFileInput) {
        hiddenFileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            
            files.forEach(file => {
                const fileBadge = document.createElement('div');
                fileBadge.className = 'file-badge';
                
                if (file.type.startsWith('image/')) {
                    const imgUrl = URL.createObjectURL(file);
                    fileBadge.innerHTML = `
                        <img src="${imgUrl}" alt="preview" class="icon-img preview-img" />
                        <span class="badge-text">${file.name}</span>
                        <span class="remove-file" aria-label="Remove file" tabindex="0" role="button">&times;</span>
                    `;
                } else {
                    fileBadge.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                        <span class="badge-text">${file.name}</span>
                        <span class="remove-file" aria-label="Remove file" tabindex="0" role="button">&times;</span>
                    `;
                }
                
                fileBadge.querySelector('.remove-file').addEventListener('click', () => fileBadge.remove());
                filePreviewContainer.appendChild(fileBadge);
            });
            
            hiddenFileInput.value = '';
        });
    }
}