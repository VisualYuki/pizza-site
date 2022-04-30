@extends("admin.layouts.main")

@section("content")


    <div class="card card-primary">
        <!-- /.card-header -->
        <!-- form start -->
        <form
            action="{{$action == "update" ? route('administrator-product-update'): route('administrator-product-create-save')}}"
            method="POST">
            @csrf
            <div class="card-body">
                <input type="text" name="id" class="form-control" style="display:none"
                       value="{{$action == "update" ? $product->id : ""}}">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" id="name"
                           value="{{$action == "update" ? $product->name: ""}}">
                </div>
                <div class="form-group">
                    <label for="desc">Desc</label>
                    <textarea name="desc" id="desc" cols="30" class="form-control"
                              rows="3">{{$action == "update" ? $product->desc: ""}}</textarea>
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" name="price" class="form-control" id="price"
                           value="{{$action == "update" ? $product->price: ""}}">
                </div>
            </div>
            <!-- /.card-body -->

            <div class="card-footer">
                <button type="submit" class="btn btn-primary">
                    {{
    $action == "update" ? "Update" : "Create"
}}

                </button>
            </div>
        </form>
    </div>
@endsection
