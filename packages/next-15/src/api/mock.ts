export class Mock {
    public static Http = class {
        public static response<T>(data: T) {
            return {
                status: 200,
                data,
            };
        }
    };

    public static Business = class {
        public static response<T>(data: T) {
            return Mock.Http.response({
                success: true,
                code: 0,
                message: '获取文章信息列表成功',
                data,
            });
        }

        public static page<T>(data: T) {
            return Mock.Business.response({
                content: data,
                totalElements: 0,
                numberOfElements: 0,
                totalPages: 0,
                first: true,
                last: true,
                empty: true,
                number: 0,
                size: 0,
            });
        }
    };
}
