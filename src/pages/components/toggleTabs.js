import {generateAlphaNumString } from '../../util';


export default function addTabs(ids){
    var id = `_${generateAlphaNumString(10)}`;
    $("#rightcol").prepend(`<div id="${id}" 
        style="margin-bottom:.5rem;min-width:100px; white-space:normal;" 
        class="w-100 py-1" ></div>`);
    var $id = $(`#${id}`);
    ids.forEach(item => { 
        var iconName = 'eye-slash';
        if ($(`#${item}`).is(':visible')) {
            iconName = 'eye';
        }
        $id.append(
            `<span class="${item} bg-glass p-1 text-muted" 
            style="cursor:pointer;"
            data-eye="fa-eye"><i class="fa-solid fa-${iconName}"></i> 
            ${item}</span>`
        );
        $(`.${item}`).on('click', (e)=>{
            var data = e.target.dataset;
            if (data.eye == 'fa-eye') {
                $(`#${item}`).slideUp();
                $(`.${item}`).empty();
                $(`.${item}`).append(`<i class="fa-solid fa-eye-slash"></i> ${item}`);
                $(`.${item}`).attr('data-eye', 'fa-eye-slash');
            }else if (data.eye == 'fa-eye-slash') {
                $(`#${item}`).slideDown();
                $(`.${item}`).empty();
                $(`.${item}`).append(`<i class="fa-solid fa-eye"></i> ${item}`);
                $(`.${item}`).attr('data-eye', 'fa-eye');
            }

        });
    });
}