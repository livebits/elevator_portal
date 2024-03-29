export default {
    ra: {
        action: {
            delete: 'حذف',
            show: 'نمایش',
            list: 'لیست',
            save: 'ذخیره',
            create: 'ایجاد',
            edit: 'ویرایش',
            cancel: 'انصراف',
            refresh: 'بروز‌رسانی',
            add_filter: 'افزودن فیلتر',
            remove_filter: 'حذف این فیلتر',
            back: 'بازگشت',
            add: 'اضافه',
            bulk_actions: '۱ آیتم انتخاب شد |||| %{smart_count} عدد از آیتم‌ها انتخاب شدند',
            clear_input_value: 'پاک‌کردن مقدار',
            clone: 'شبیه‌سازی',
            export: 'دریافت خروجی',
            remove: 'حذف',
            search: 'جست‌وجو',
            sort: 'مرتب‌سازی',
            undo: 'لغو',
        },
        boolean: {
            true: 'بله',
            false: 'خیر',
        },
        page: {
            create: 'ایجاد %{name}',
            dashboard: 'داشبورد',
            edit: '%{name} #%{id}',
            error: 'مشکلی ایجاد شد',
            list: 'لیست %{name}',
            loading: 'در حال بارگزاری',
            not_found: 'پیدا نشد',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several: 'تعدادی فایل برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'فایلی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            image: {
                upload_several: 'تعدادی عکس برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'عکسی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            references: {
                all_missing: 'امکان پیدا کردن اطلاعات وجود ندارد.',
                many_missing: 'اطلاعات در دسترس نیست.',
                single_missing: 'اطلاعات در دسترس نیست.',
            },
        },
        message: {
            yes: 'بله',
            no: 'خیر',
            are_you_sure: 'آیا اطمینان دارید ؟',
            about: 'درباره',
            not_found: 'شما یک نشانی اینترنتی اشتباه تایپ کردید یا پیغام بدی را دنبال کردید',
            bulk_delete_content:
                'آیا از حذف  %{name} اطمینان دارید؟ |||| آیا از حدف %{smart_count} عدد از آیتم‌ها اطمینان دارید؟',
            bulk_delete_title: 'حذف %{name} |||| حذف %{smart_count} عدد از آیتم‌های %{name}',
            delete_content: 'آیا از حذف این آیتم اطمینان دارید؟',
            delete_title: 'حذف %{name} #%{id}',
            details: 'جزییات',
            error: "خطایی رخ داده است. درخواست شما کامل نشد",
            invalid_form: 'فرم درست پر نشده است. لطفا خطاها را بررسی کنید',
            loading: 'صفحه در حال بارگزاری است، چند لحظه صبر کنید',
        },
        navigation: {
            no_results: 'نتیجه‌ای پیدا نشد',
            page_out_of_boundaries: 'شماره صفحه %{page} خارج از محدوده است',
            page_out_from_end: 'نمی‌توان به بعد از صفحه آخر رفت',
            page_out_from_begin: 'نمی‌توان به قبل از صفحه اول رفت',
            page_range_info: '%{offsetBegin}-%{offsetEnd} (کل: %{total})',
            next: 'بعدی',
            prev: 'قبلی',
            no_more_results: 'شماره صفحه‌ی %{page} خارج از محدوده مجاز است. صفحه قبل را امتحان کنید.',
            page_rows_per_page: 'تعداد ردیف‌ها در صفحه:',
        },
        auth: {
            username: 'نام‌کاربری',
            password: 'رمز عبور',
            sign_in: 'ورود',
            sign_in_error: 'نام کاربری یا رمز عبور اشتباه می باشد، دوباره تلاش کنید',
            logout: 'خروج',
            user_menu: 'پروفایل',
        },
        notification: {
            updated: 'اطلاعات با موفقیت بروز‌رسانی شد',
            created: 'اطلاعات با موفقیت ایجاد شد',
            deleted: 'مورد انتخاب شده با موفقیت حذف شد',
            item_doesnt_exist: 'مورد مورد نظر پیدا نشد',
            http_error: 'خطا در برقراری ارتباط با سرور',
            bad_item: 'آیتم اشتباه',
            data_provider_error: 'خطا در دریافت اطلاعات',
            canceled: 'لغو شد',
        },
        validation: {
            required: 'اجباری',
            minLength: 'حداقل باید %{min} کارکتر باشد',
            maxLength: 'باید %{max} کارکتر یا کمتر باشد',
            minValue: 'حداقل باید %{min} باشد',
            maxValue: 'باید %{max} یا کمتر باشد',
            number: 'باید یک عدد باشد',
            email: 'باید یک آدرس ایمیل صحیح باشد',
            oneOf: 'باید انتخابی از این گزینه‌ها باشد: %{options}',
            regex: 'باید با فرمت خاصی هماهنگ باشد (regexp): %{pattern}',
        },
    },
};

