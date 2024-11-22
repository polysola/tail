jQuery(document).ready(function($) {
    jQuery('.u-select-sorting').change(function() {
        if (!$(this).closest('.u-products').attr('data-products-datasource')
            || $(this).closest('.u-products').attr('data-products-datasource') === 'site') {
            return;
        }
        let selectedOption = $(this).children("option:selected").val();
        let url = new URL(window.location.href);
        let params = new URLSearchParams(url.search);
        params.delete('sorting');
        params.append('sorting', selectedOption);
        url.search = params.toString();
        let newUrl = url.toString();
        if (newUrl) {
            window.location.href = newUrl;
        }
    });
    jQuery('.u-select-categories').change(function() {
        let selectedOption = jQuery(this).children("option:selected").val();
        let url = new URL(window.location.href);
        let params = new URLSearchParams(url.search);
        params.delete('categoryId');
        params.append('categoryId', selectedOption);
        url.search = params.toString();
        let newUrl = url.toString();
        if (newUrl) {
            window.location.href = newUrl;
        }
    });
});