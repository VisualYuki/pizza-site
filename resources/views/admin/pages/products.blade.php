@extends("admin.layouts.main")

@section("content")

    <table class="table table-bordered">
        <thead>
        <tr>
            <th style="width: 10px">id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($products as $product)
            <tr>
                <td>{{$product->id}}</td>
                <td><img style="width: 50px; weight :50px" src="/{{$product->image}}"/></td>
                <td>{{$product->name}}</td>
                <td>
                    {{$product->desc}}
                </td>
                <td style="white-space: nowrap;">{{$product->price}} Rub.</td>
                <td>
                    <a href="{{route('products.edit', ["product" => $product->id]) }}">edit</a>
                    <form action="{{route('products.destroy', ["product" => $product->id]) }}" method="POST">
                        @method('DELETE')
                        @csrf
                        <label class="text-danger " style="cursor: pointer; font-weight: normal">
                            delete
                            <button type="submit" style="display: none">

                            </button>
                        </label>

                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <a href="{{route("products.create")}}" class="btn btn-primary">
        Create product
    </a>
@endsection
