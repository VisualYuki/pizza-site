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
                           value="{{old('name', $action == "update" ? $productData->name: "")}}">
                    @error("name")
                    <div class="alert alert-danger mt-2">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="desc">Desc</label>
                    <textarea name="desc" id="desc" cols="30" class="form-control"
                              rows="3">{{old('desc', $action == "update" ? $productData->desc: "")}}</textarea>
                    @error("desc")
                    <div class="alert alert-danger mt-2">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" name="price" class="form-control" id="price"
                           value="{{old("price", $action == "update" ? $productData->price: "")}}">
                    @error("price")
                    <div class="alert alert-danger mt-2">{{ $message }}</div>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="file" name="image" class="form-control" id="image">
                </div>
            </div>

            <div class="card-footer">
                <button type="submit" class="btn btn-primary">
                    {{($action == "update") ? "Update" : "Create"}}
                </button>

            </div>
        </form>
    </div>
@endsection
