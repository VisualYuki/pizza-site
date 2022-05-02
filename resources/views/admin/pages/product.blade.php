@extends("admin.layouts.main")

@section("content")
    <div class="card card-primary">
        <form
            action="{{$action == "update" ? route('products.update', $product): route('products.store')}}"
            method="POST"
            enctype="multipart/form-data"
        >
            @csrf
            @if($action == "update")
                @method('PUT')
            @endif
            <div class="card-body">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" id="name"
                           value="{{$action == "update" ? $productData->name: ""}}">
                </div>
                <div class="form-group">
                    <label for="desc">Desc</label>
                    <textarea name="desc" id="desc" cols="30" class="form-control"
                              rows="3">{{$action == "update" ? $productData->desc: ""}}</textarea>
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" name="price" class="form-control" id="price"
                           value="{{$action == "update" ? $productData->price: ""}}">
                </div>


                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="file" name="image" class="form-control" id="image"
                    >
{{--                    @if($action == "update")--}}
{{--                        <img src="{{$productData->image}}"/>--}}
{{--                    @endif--}}
                </div>


                {{--                value="{{$action == "update" ? $productData->image: ""}}"--}}
            </div>

            <div class="card-footer">
                <button type="submit" class="btn btn-primary">
                    {{
                        ($action == "update") ? "Update" : "Create"
                    }}
                </button>

            </div>
        </form>
    </div>
@endsection
