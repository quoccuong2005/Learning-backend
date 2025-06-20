const tablePermissions = document.querySelector('[table-permissions]');

if (tablePermissions) {
    const buttonSubmit = document.querySelector('[button-submit]');
    buttonSubmit.addEventListener("click", () => {
        let permissions = [];
        const rows = tablePermissions.querySelectorAll('[data-name]');

        rows.forEach(row => {
            const name = row.getAttribute('data-name');
            const inputs = row.querySelectorAll("input")
            console.log("name", name);

            if (name === "id") {
                inputs.forEach(input => {
                    const id = input.value;
                    console.log("id", id);
                    permissions.push({
                        id: id,
                        permissions: []
                    });
                });
            } else {
                inputs.forEach((input, index) => {
                    const checked = input.checked;

                    console.log("checked", checked);
                    console.log("name", name);
                    console.log("...................")
                    console.log("index", index);

                    if (permissions[index]) {
                        if (checked) {
                            permissions[index].permissions.push(name);
                        }
                    } else {
                        console.error(`Permissions[${index}] không tồn tại!`);
                    }

                });
            }

        })
        console.log(permissions);
        if (permissions.length > 0) {
            const formChangePermissions = document.querySelector('#form-change-permissions');
            const inputPermissions = formChangePermissions.querySelector('input[name="permissions"]');
            inputPermissions.value = JSON.stringify(permissions);
            formChangePermissions.submit();
        }
    })
}


const dataRecord = document.querySelector('[data-records]');

if (dataRecord) {
    const records = JSON.parse(dataRecord.getAttribute('data-records'));
    const tablePermissions = document.querySelector('[table-permissions]');
    records.forEach((record, index) => {
        const permissions = record.permissions
        console.log(permissions)
        permissions.forEach(permissions => {
            const row = tablePermissions.querySelector(`[data-name="${permissions}"]`);
            if (!row) {
                console.error(`Không tìm thấy dòng với tên "${permissions}"`);
                return;
            }
            const input = row.querySelectorAll("input")[index];
            input.checked = true;

        })
    })

} 